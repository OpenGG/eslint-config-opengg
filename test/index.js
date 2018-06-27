/* eslint-disable no-console */
const {
  CLIEngine,
} = require('eslint');

const resolve = require('./lib/resolve')(__dirname);

const readCases = require('./lib/read-cases');

const main = async () => {
  const cli = new CLIEngine({
    configFile: resolve('../.eslintrc'),
    ignore: false,
  });

  const formatter = cli.getFormatter('compact');

  const config = cli.getConfigForFile(__filename);

  console.log(
    JSON.stringify(config, null, '\t')
  );

  await Promise.all(
    ['bad', 'good'].map(
      async (type) => {
        const folder = resolve(`cases/${type}`);
        const cases = await readCases(
          folder
        );

        const bad = type === 'bad';

        const promises = cases.map(
          async ({
            name,
            path,
            content,
          }) => {
            const str = await content;
            const report = cli.executeOnText(str, path);
            const reportText = formatter(report.results).replace(folder, '').replace(/\n+/g, ' ');
            if (bad) {
              if (
                report.errorCount === 1
                && report.warningCount === 0
              ) {
                console.log(`[passes]${type}/${name} reporting errors: `, reportText);
              } else {
                console.error(`[failed]${type}/${name} not reporting error. `, reportText);
                process.exitCode = -2;
              }
            } else if (
              report.errorCount === 0
              && report.warningCount === 0
            ) {
              console.log(`[passes]${type}/${name} not reporting errors. `, reportText);
            } else {
              console.error(`[failed]${type}/${name} reporting error: `, reportText);
              process.exitCode = -2;
            }
          }
        );

        return Promise.all(promises);
      }
    )
  );
};

main()
  .then(
    () => {
      console.log('Finished');
    },
    (e) => {
      console.error(e);
      process.exitCode = -1;
    }
  );
