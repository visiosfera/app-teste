pipeline {
    agent any

    stages {
        stage('Check Docker Version') {
            steps {
                script {
                    sh 'docker --version'
                }
            }
        }

        stage('List Files') {
            steps {
                script {
                    sh 'ls'
                }
            }
        }

        stage('NPM Update') {
            steps {
                script {
                    sh 'rm -r /var/jenkins_home/workspace/app-teste/dist/'
                    sh 'npm update'
                }
            }
        }

        stage('NPM Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Manage PM2 Process') {
            steps {
                script {
                    sh 'pm2 delete api-teste || true'
                    sh 'pm2 start /var/jenkins_home/workspace/app-teste/dist/main.js --name api-teste'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
