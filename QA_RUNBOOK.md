# QA Runbook - CyberAI Defense Platform

## Pre-Launch Security & Quality Checklist

### Route Testing
- [ ] `/` (Home) loads without errors
- [ ] `/about` loads without errors  
- [ ] `/team` loads without errors
- [ ] `/demo` loads without errors
- [ ] `/demo/private` redirects to `/login` (auth guard working)
- [ ] `/investors` loads without errors
- [ ] `/careers` loads without errors
- [ ] `/login` loads with disabled state and auth warning
- [ ] `/404` (invalid routes) shows NotFound page

### Form Validation & Functionality
- [ ] Demo early access form: client-side validation works
- [ ] Demo early access form: shows appropriate error messages
- [ ] Investor contact form: client-side validation works  
- [ ] Investor contact form: shows appropriate error messages
- [ ] Forms show loading states via StatefulButton
- [ ] Forms show success messages after submission
- [ ] Forms reset after successful submission

### Backend Integration (if configured)
- [ ] Demo form POST → Edge Function returns 204
- [ ] Investor form POST → Edge Function returns 204
- [ ] Rate limiting works (test 10+ rapid submissions)
- [ ] Generic error messages shown (no server error details leaked)

### Security Checks
- [ ] No secrets in client bundle (search for "key=", "apiKey", "service_role")
- [ ] No API keys visible in browser dev tools
- [ ] RATE_LIMIT_SALT not exposed to client
- [ ] CSP headers present in staging environment
- [ ] HSTS headers present in staging environment
- [ ] X-Content-Type-Options: nosniff header present

### Accessibility & UX
- [ ] Reduced motion: animations respect `prefers-reduced-motion`
- [ ] Keyboard navigation works on all interactive elements
- [ ] Focus indicators visible on all focusable elements
- [ ] Screen reader accessible (aria-labels, semantic HTML)
- [ ] Form validation errors announced to screen readers

### Mobile & Responsive
- [ ] Navigation menu works on mobile
- [ ] Hero section readable on mobile
- [ ] Form inputs usable on mobile (proper sizing, no zoom)
- [ ] Cards and grid layouts stack properly on small screens
- [ ] Text remains readable at various zoom levels

### Performance
- [ ] Page load times under 3 seconds
- [ ] Images optimized and properly sized
- [ ] No console errors in production build
- [ ] Bundle size reasonable (check dev tools Network tab)

### Content & Staging
- [ ] `robots.txt` still set to `Disallow: /` (staging mode)
- [ ] Meta descriptions present on all pages
- [ ] Page titles descriptive and unique
- [ ] All placeholder content clearly marked as such
- [ ] Legal/privacy links point to placeholder pages (not broken)

### Environment Configuration
- [ ] Dev environment shows config check section
- [ ] Production build hides dev configuration
- [ ] VITE_FUNCTIONS_BASE properly configured for Edge Functions
- [ ] Error handling graceful when environment vars missing

## Notes
- **Do not publish automatically** - wait for explicit "Publish Staging" command
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify mobile testing on actual devices if possible
- Check all external links (though most should be placeholders)

## Monthly Maintenance
- [ ] npm audit --audit-level=high
- [ ] tsc --noEmit
- [ ] eslint . --max-warnings=0
- [ ] grep -R "service_role" dist/ || true
- [ ] curl -I https://<staging-domain>/ | grep -E "strict-transport|content-security|referrer-policy"