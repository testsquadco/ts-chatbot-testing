const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const moment = require('moment');
const chalk = require('chalk');

// Ensure reports directory exists
const reportsDir = path.join(__dirname, '..', 'reports');
if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
}

// Generate timestamp for report file
const timestamp = moment().format('YYYYMMDD_HHmmss');
const reportFile = path.join(reportsDir, `test-report-${timestamp}.txt`);

// Run botium tests with output redirection
exec('npx botium-cli run --convos ./tests/convos --verbose', (error, stdout, stderr) => {
    // Create report content
    let reportContent = '';
    
    // Add timestamp and header
    reportContent += `Test Report - ${moment().format('YYYY-MM-DD HH:mm:ss')}\n`;
    reportContent += '=====================================\n\n';
    
    // Add test output
    if (stdout) {
        reportContent += 'Test Output:\n';
        reportContent += stdout;
        reportContent += '\n';
    }
    
    // Add errors if any
    if (stderr) {
        reportContent += '\nErrors:\n';
        reportContent += stderr;
        reportContent += '\n';
    }
    
    if (error) {
        reportContent += '\nExecution Error:\n';
        reportContent += error.message;
        reportContent += '\n';
    }

    // Write report to file
    fs.writeFileSync(reportFile, reportContent);

    console.log(chalk.green(`Test report generated: ${reportFile}`));
    
    // Exit with error code if tests failed
    if (error) {
        process.exit(1);
    }
}); 