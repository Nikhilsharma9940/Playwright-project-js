pipeline {
    agent any

    environment {
        CI = 'true'
        PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}\\.playwright-browsers"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Nikhilsharma9940/Playwright-project-js.git'
            }
        }

        stage('Check Node Version') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test tests/calender.spec.js --project=chromium --reporter=html,junit'
            }
        }
    }

    post {
        always {
            junit testResults: 'test-results/**/*.xml', allowEmptyResults: true

            publishHTML(target: [
                allowMissing         : true,
                alwaysLinkToLastBuild: true,
                keepAll              : true,
                reportDir            : 'playwright-report',
                reportFiles          : 'index.html',
                reportName           : 'Playwright HTML Report'
            ])

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
