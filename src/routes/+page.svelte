<script>
    import { onMount } from 'svelte';
    import { currentLang, changeLanguage, initializeLanguage } from '$lib/languageStore';
    import ProfileCard from '$lib/components/ProfileCard.svelte';

    // Initialize the language when the component mounts
    onMount(() => {
        initializeLanguage();
    });
</script>

<select name="lang" id="lang-select" bind:value={$currentLang} on:change={e => changeLanguage(/** @type {HTMLSelectElement} */ (e.target).value)}>
    <option value="ru">🇷🇺</option>
    <option value="en">🇺🇸</option>
</select>

<div class="app">
    <ProfileCard />
</div>

<footer class="author">
    With ❤️ by <a href="https://horvitz.ru">horvitz</a>
</footer>