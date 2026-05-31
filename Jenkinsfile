pipeline {
    agent any



    environment {
        CI = 'true'
        PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}/.playwright-browsers"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Nikhilsharma9940/Playwright-project-js.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps chromium'
                // To run all browsers: npx playwright install --with-deps
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=html,junit'
            }
        }
    }

    post {
        always {
            // Publish JUnit XML test results
            junit testResults: 'test-results/**/*.xml', allowEmptyResults: true

            // Publish Playwright HTML report as an artifact
            publishHTML(target: [
                allowMissing         : true,
                alwaysLinkToLastBuild: true,
                keepAll              : true,
                reportDir            : 'playwright-report',
                reportFiles          : 'index.html',
                reportName           : 'Playwright HTML Report'
            ])

            // Archive test results and screenshots/videos on failure
            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
        }

        success {
            echo 'All Playwright tests passed!'
        }

        failure {
            echo 'Some tests failed. Check the Playwright HTML report.'
        }
    }
}
