pipeline {
    agent any
    
    environment {
        // Define any environment variables here, if needed
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the GitHub repository
                git branch: 'master', url: 'git@github.com:w4lck3r/mspr_paye_ton_kawa.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install dependencies, e.g., for a Node.js project
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                // Build the project, if applicable
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy the application, e.g., to a server or cloud service
                echo 'Deploying application...'
                // Add your deployment steps here
            }
        }
    }
    
    post {
        always {
            // Clean up actions, e.g., deleting temporary files
            echo 'Cleaning up...'
        }
        
        success {
            // Actions to perform on success
            echo 'Build succeeded!'
        }
        
        failure {
            // Actions to perform on failure
            echo 'Build failed!'
        }
    }
}


pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'git@github.com:w4lck3r/mspr_paye_ton_kawa.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    // Add build steps, e.g., running npm install and tests
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Add deployment steps
                }
            }
        }
    }
}
