# vite project
```javascript
npm create vite@latest DEVTINDER-WEB -- --template react

cd DEVTINDER-WEB
npm install
npm run dev
```
# install and setup tailwind css in the project.

# install and setup Daisy ui in the project
## Add Navbar component to App.js

- create NavBar component(Navbar.jsx)

# react router
## prompt to set up react router using react-router-dom

- give a step by step guide to use react router in the project using react router dom

- create children Routes.(/login /profile)
- create outlet
-create footer

# Create login page

# handle cors error
# set up redux-toolkit 
```javasccript
npm install @reduxjs/toolkit react-redux
```
- configureStor==> provide the store==>create slice==> add slice to the store=>dispatch action==>subscribe to the store. 
- reade more on redux-toolkit.

# logout and Edit Profile 

- show Toast message on save of profile.
- new Page- see all my connections
- new page- see all my connection request
- Feature- Accept/Reject connection request

- Feature- send/ignore the user card from the feed.

- sign up completed.


- git clone
- Frontend
  - npm install =>dependencies install
  - npm run build
  - sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo system anable nginx
  - copy code from dist(build files) to /var/www/html/ using below command.
  - sudo scp -r dist/* /var/www/html/
  - Enable port:80 of your instance.

- Backend
  - allowed ec2 instance public ip on mongodb server
  - npm install pm2 -g
  - pm2 start npm -- start
  - pm2 logs
  - pm2 list,pm2 flush <name>, pm2 stop <name>, pm2 delete <name>

  - pm2 start npm --name "devTinder-backend" --start.

  - Frontend = http://3.111.33.218/
  - Backend = http://3.111.33.218:3000/

  - Domain name= devTinder.com=>  3.111.33.218
  
  - Frontend= devTinder.com
  -Backend= devTInder.com:3000 => devTinder.com/api

  ### Config nginx

  - nginx proxy pass /api to port 3000 (prompt ).
  
  # Nginx Reverse Proxy for `/api` to Port 3000

This guide sets up **Nginx** as a reverse proxy to forward `/api` requests to a backend running on **port 3000**.

## 🚀 Steps to Configure

### 1️⃣ Open Nginx Configuration  
Run the following command to edit the default site configuration:  
```sh
sudo nano /etc/nginx/sites-available/default
```

### 2️⃣ Modify Configuration

Find the existing server {} block and add the following configuration:

```sh
server {
    listen 80;

    server_name your_domain_or_IP;

    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
 Replace your_domain_or_IP with your actual domain or server IP. => 3.111.33.218

### 3️⃣ Test Nginx Configuration

Before restarting Nginx, test if the configuration is valid:

```sh
sudo nginx -t
```
If successful, you will see:
```sh
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
### 4️⃣ Restart Nginx

Restart Nginx to apply the changes:
```sh
sudo systemctl restart nginx
```
### 6️⃣ Verify the Setup
Open your browser and visit:

```sh
http://your_domain_or_IP/api/

```
- modify the base_URL in frontend project to /api/
