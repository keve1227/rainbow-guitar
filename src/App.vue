<script setup>
import { ref } from "vue";
import Piano from "./components/Piano.vue";
import Tabs from "./components/Tabs.vue";

const githubUrl = "https://github.com/Keve1227/rainbow-guitar";
const copyright = `<a href="${githubUrl}"><strong>Copyright © 2022 Kevin Sundqvist Norlén.</strong> All Rights Reserved</a>`;

const instruments = ref({
    guitar: {
        name: "Guitar",
        aspectRatio: "14 / 3",
        strings: [4, 11, 7, 2, 9, 4],
        length: 14,
    },
    bass: {
        name: "Bass",
        aspectRatio: "14 / 3",
        strings: [7, 2, 9, 4],
        length: 14,
    },
    ukulele: {
        name: "Ukulele",
        aspectRatio: "14 / 3",
        strings: [9, 4, 0, 7],
        length: 12,
    },
});

const notes = ref(new Set());
const instrument = ref(instruments.value.guitar);
</script>

<template>
    <main>
        <div id="piano">
            <piano style="aspect-ratio: 5 / 3" :notes="notes" />
            <piano style="aspect-ratio: 5 / 3" :notes="notes" />
        </div>

        <tabs
            v-if="instrument"
            :style="{ 'aspect-ratio': instrument.aspectRatio }"
            :strings="instrument.strings"
            :length="instrument.length"
            :notes="notes"
        />

        <div id="options">
            <select name="instrument" v-model="instrument">
                <option v-for="value in instruments" :value="value">
                    {{ value.name }}
                </option>
            </select>
        </div>
    </main>

    <footer v-html="copyright"></footer>
</template>

<style lang="scss">
@use "./styles/main";

#app {
    max-width: 800px;
    margin: 0 auto;

    > main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 1rem;
        margin-bottom: 2rem;
        position: relative;
    }

    > footer {
        position: fixed;
        font-size: 0.67rem;
        left: 1em;
        bottom: 0.5em;
        opacity: 50%;
        z-index: 1000;
    }
}

#piano {
    display: flex;
    flex-direction: row;
}

#options {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>
