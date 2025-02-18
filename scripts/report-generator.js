const fs = require('fs');
const path = require('path');

class TestReportGenerator {
  constructor() {
    this.results = {
      total: 0,
      passed: 0,
      failed: 0,
      scenarios: []
    };
  }

  addResult(scenario, status, error = null) {
    this.results.total++;
    this.results.scenarios.push({
      name: scenario,
      status,
      error,
      timestamp: new Date().toISOString()
    });

    if (status === 'PASSED') {
      this.results.passed++;
    } else {
      this.results.failed++;
    }
  }

  generateReport() {
    const report = {
      summary: {
        total: this.results.total,
        passed: this.results.passed,
        failed: this.results.failed,
        passRate: `${((this.results.passed / this.results.total) * 100).toFixed(2)}%`
      },
      details: this.results.scenarios
    };

    const reportPath = path.join(__dirname, '../reports');
    if (!fs.existsSync(reportPath)) {
      fs.mkdirSync(reportPath);
    }

    fs.writeFileSync(
      path.join(reportPath, `test-report-${Date.now()}.json`),
      JSON.stringify(report, null, 2)
    );

    return report;
  }
}

module.exports = TestReportGenerator; 