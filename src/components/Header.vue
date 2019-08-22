<template>
    <div class="header">
        <h1 class="application-title">Ilconto</h1>
        <p class="page-message" v-if="subtitle">
            The most unfinished application for laughing at your friends !
        </p>
    </div>
</template>
<script>
export default {
    name: 'app-header',
    props: {
        'subtitle': {
            type: Boolean,
            default: true,
        },
        'isDark': {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="css" scoped>

    .header {
        display: flex;
        width: 100%;
        flex-flow: column nowrap;
    }

    .application-title {
        margin: 1em auto 0.5em auto;
        font-size: 3em;
        font-weight: bold;
        color: var(--primary-dark);
    }

    .page-message {
        width: 100%;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
        margin: 0 auto 1em auto;
    }
</style>