echo $SSH_KEY >> key
chmod 400 key
SSH_OPTIONS=-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null
# mkdir -p ~/.ssh
# ssh-keyscan -H 18.192.4.4 > ~/.ssh/known_hosts
sed -i "s/latest-tagged-version/$GITHUB_RUN_NUMBER/g" docker-compose.yaml
scp -i key $SSH_OPTIONS docker-compose.yaml ubuntu@18.192.4.4:/home/ubuntu
ssh -i key $SSH_OPTIONS ubuntu@18.192.4.4 'cd /home/ubuntu/ && docker-compose up -d'
