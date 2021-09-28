echo $SSH_KEY >> key
cat key
sed -i "s/latest-tagged-version/$GITHUB_RUN_NUMBER/g" docker-compose.yaml
scp -i key docker-compose.yaml ubuntu@18.192.4.4:/home/ubuntu
ssh -i key ubuntu@18.192.4.4 'cd /home/ubuntu/ && docker-compose up -d'
