pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Quality Gate') {
            steps {
                script {
                    def scannerHome = tool name: 'SonarQubeScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Exemple de script de déploiement pour Kubernetes
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }

    post {
        success {
            echo 'Pipeline réussi ! Déclenchement des notifications...'
            // Exemple : Envoyer une notification
        }
        failure {
            echo 'Pipeline échoué ! Déclenchement du rollback...'
            // Exemple : Rollback du déploiement
        }
    }
}
