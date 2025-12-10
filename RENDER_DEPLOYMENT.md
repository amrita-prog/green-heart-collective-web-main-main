# Backend Deployment Guide - Render

This guide will walk you through deploying your Django backend to Render.

## Prerequisites

- GitHub account with your repository pushed
- Render account (free tier available at render.com)
- PostgreSQL database on Render (optional but recommended for production)

## Step-by-Step Deployment

### 1. **Prepare Your Repository**

Ensure all files are committed to GitHub:

```bash
git add .
git commit -m "Add production deployment configuration"
git push origin main
```

### 2. **Create a PostgreSQL Database on Render** (Recommended)

1. Go to [render.com](https://render.com)
2. Click "New" → "PostgreSQL"
3. Set database name: `green-heart-db`
4. Set user: `postgres`
5. Choose region closest to your users
6. Copy the **Internal Database URL** (you'll need this)

### 3. **Deploy Backend Service**

1. Click "New" → "Web Service"
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: `green-heart-backend`
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn core.wsgi:application`
   - **Plan**: Free (or select paid as needed)

### 4. **Set Environment Variables**

In the Render dashboard for your web service, go to **Environment** and add:

```
DEBUG=False
SECRET_KEY=<generate-a-strong-key-here>
ALLOWED_HOSTS=localhost,127.0.0.1,green-heart-backend.onrender.com,<your-frontend-domain>
DATABASE_URL=<internal-database-url-from-step-2>
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://<your-frontend-domain>
```

### 5. **Run Database Migrations**

After deployment:

1. Click the "Shell" tab in your Render service
2. Run these commands:

```bash
python manage.py migrate
python manage.py collectstatic --noinput
```

## Environment Variables Explained

| Variable | Description |
|----------|-------------|
| `DEBUG` | Set to `False` for production |
| `SECRET_KEY` | Generate a strong key using `python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"` |
| `ALLOWED_HOSTS` | Comma-separated list of domains your API can serve |
| `DATABASE_URL` | PostgreSQL connection string |
| `CORS_ALLOWED_ORIGINS` | Frontend domain(s) that can make requests to your API |

## Frontend Integration

### Update API Base URL

In your frontend code (`src/services/api.ts`), update the API endpoint:

```typescript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://green-heart-backend.onrender.com';
```

Or create a `.env` file in the frontend directory:

```
VITE_API_URL=https://green-heart-backend.onrender.com
```

## Monitoring & Logs

- View real-time logs in the Render dashboard under **Logs**
- Check status and metrics in the **Metrics** tab
- Use the Shell tab to run Django management commands

## Common Issues & Solutions

### Issue: Database Connection Error
**Solution**: Verify `DATABASE_URL` is correct and PostgreSQL service is running

### Issue: Static files not loading
**Solution**: Run `python manage.py collectstatic` in the Shell tab

### Issue: CORS errors
**Solution**: Ensure your frontend domain is in `CORS_ALLOWED_ORIGINS`

### Issue: 500 errors
**Solution**: Check logs for detailed error messages in the **Logs** tab

## Database Backup

Render provides automatic backups. To manually backup:

1. Go to PostgreSQL database in Render
2. Click **Backups** tab
3. Click **Create Manual Backup**

## Cost Optimization

- **Free Tier**: Includes 750 compute hours/month (enough for one web service)
- **Paid Tier**: $7+/month for more reliability and resources
- PostgreSQL has its own pricing (free tier available with 100MB storage)

## Additional Resources

- [Render Docs - Python/Django Deployment](https://render.com/docs/deploy-python)
- [Django Production Checklist](https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/)
