<script>
    import { t } from '$lib/translations';
</script>

<div class="profile-card">
    <div class="profile-image">
        <img src="/images/sabbath.webp" alt="Profile" />
    </div>
    <div class="profile-info">
        <h1>{$t('main.name')}</h1>
        <div class="position">{$t('main.position')}</div>
        <a href="https://centrinvest.ru/" class="company">{$t('main.company')}</a>
        <div class="social-links">
            <a href="https://t.me/SergeySabbath" class="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/images/telegram.svg" alt="Telegram">
            </a>
            <a href="https://github.com/sabbath666" class="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/images/github.svg" alt="Github">
            </a>
        </div>
    </div>
</div>
