# Stopping previous services

sudo systemctl stop docker

sudo systemctl disable docker

# Remove previous versions

sudo apt-get -y remove docker* containerd runc

# Installing depencies

sudo apt-get -y install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Adding a public key

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Adding a remote repo to apt

echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Installing Docker

sudo apt-get -y update

sudo apt-get -y install docker-ce docker-ce-cli containerd.io

# Creating a docker user

sudo groupadd docker

sudo usermod -aG docker $USER

newgrp docker

# Initializing Daemon

sudo systemctl start docker

sudo systemctl enable docker

# Installing Docker Compose

sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Adding permission to docker-compose

sudo chmod +x /usr/local/bin/docker-compose

# Validating installation

sudo docker --version

sudo docker-compose --version
