# Use official PHP image with Apache
FROM php:8.2-apache

# Enable mod_rewrite
RUN a2enmod rewrite

# Copy app files
COPY app/ /var/www/html/

# Expose port 80
EXPOSE 80
