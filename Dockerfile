# Use an official Apache HTTP Server as the base image
FROM httpd:alpine

# Copy your local website files to the Apache web server directory
COPY . /usr/local/apache2/htdocs/

# Expose port 80 to make the application accessible
EXPOSE 80

# Start the Apache server (this is the default entrypoint)
CMD ["httpd", "-D", "FOREGROUND"]
