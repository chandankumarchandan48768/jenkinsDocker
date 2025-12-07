pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git https://github.com/chandankumarchandan48768/jenkinsDocker
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                echo "running test...!"
            }
        }
    }
}