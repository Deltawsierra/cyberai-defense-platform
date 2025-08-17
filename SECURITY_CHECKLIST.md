# Security Release Checklist

## Pre-Deploy Security Verification

### Input Validation & Data Protection
- [ ] All form inputs validated and sanitized client-side
- [ ] Server-side validation on all API endpoints
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (React escaping + CSP headers)
- [ ] File upload restrictions (if applicable)
- [ ] Input length limits enforced

### Database Security
- [ ] Row Level Security (RLS) enabled on all tables
- [ ] RLS policies tested for each user role
- [ ] No sensitive data exposed in public queries
- [ ] Database connection strings secured
- [ ] Backup encryption verified

### Authentication & Authorization (if applicable)
- [ ] Secure password policies implemented
- [ ] Session management configured securely
- [ ] Account lockout mechanisms active
- [ ] Multi-factor authentication available
- [ ] JWT tokens properly secured

### Infrastructure & Configuration
- [ ] HTTPS enforced (no HTTP allowed)
- [ ] Security headers configured (HSTS, CSP, X-Frame-Options)
- [ ] robots.txt set to "Disallow: /" for staging environments
- [ ] Error pages don't expose stack traces
- [ ] Debug mode disabled in production
- [ ] Unnecessary services/ports closed

### Secrets & Environment Management
- [ ] No API keys or secrets in frontend code
- [ ] No secrets committed to git repository
- [ ] Environment variables properly secured
- [ ] Third-party API keys restricted by domain/IP
- [ ] Database credentials rotated recently

### Third-Party Dependencies
- [ ] All packages scanned for known vulnerabilities
- [ ] No unauthorized external scripts or CDNs
- [ ] Dependency versions pinned and up-to-date
- [ ] License compliance verified

### Rate Limiting & Abuse Prevention
- [ ] Rate limiting configured on form endpoints
- [ ] CAPTCHA implemented for public forms
- [ ] Suspicious activity monitoring active
- [ ] IP blocking mechanisms ready

### Monitoring & Logging
- [ ] Security events logged appropriately
- [ ] Failed authentication attempts tracked
- [ ] Error monitoring configured (no sensitive data logged)
- [ ] Incident response procedures documented

### Privacy & Compliance
- [ ] Privacy policy accessible and current
- [ ] Data retention policies implemented
- [ ] User data deletion procedures available
- [ ] GDPR/CCPA compliance measures active (if applicable)

### Testing & Validation
- [ ] Security scan completed (no critical issues)
- [ ] Penetration testing performed (if required)
- [ ] All forms tested with malicious input
- [ ] Database policies tested with test users
- [ ] All routes tested for unauthorized access

## Sign-Off
- [ ] Security team approval received
- [ ] All critical and high-severity issues resolved
- [ ] Incident response team notified of deployment
- [ ] Rollback plan prepared and tested

**Deployment authorized by:** _________________ **Date:** _________

### Operational Security (Ongoing)
- [ ] Supabase secrets rotated last 90 days
- [ ] RESEND key rotated last 180 days
- [ ] Rate-limit thresholds reviewed
- [ ] CSP verified in prod (curl -I)
- [ ] RLS verified (no public policies)
- [ ] No client-side references to service_role key
- [ ] Reduced-motion fallback verified on all motion sections