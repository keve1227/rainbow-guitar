<script setup>
import { ref } from "vue";
import colors from "../js/colors";

const props = defineProps({
    notes: Set,
});

const keys = ref([
    { index: 0, white: true, extra: true },
    { index: 1, white: false, extra: false },
    { index: 2, white: true, extra: false },
    { index: 3, white: false, extra: false },
    { index: 4, white: true, extra: true },
    { index: 5, white: true, extra: true },
    { index: 6, white: false, extra: false },
    { index: 7, white: true, extra: false },
    { index: 8, white: false, extra: false },
    { index: 9, white: true, extra: false },
    { index: 10, white: false, extra: false },
    { index: 11, white: true, extra: true },
]);

function pressKey(index) {
    const note = index % 12;

    if (props.notes.has(note)) {
        props.notes.delete(note);
    } else {
        props.notes.add(note);
    }
}
</script>

<template>
    <div class="piano">
        <div>
            <div
                v-for="key in keys"
                :style="{ '--color': colors[key.index] }"
                :class="{ ...key, index: false, selected: props.notes.has(key.index) }"
                @click="pressKey(key.index)"
            ></div>
        </div>

        <div>
            <div
                v-for="key in keys.filter((key) => key.white)"
                :style="{ '--color': colors[key.index] }"
                :class="{ ...key, index: false, extra: false, selected: props.notes.has(key.index) }"
                @click="pressKey(key.index)"
            ></div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/reset";

.piano {
    display: grid;
    grid-template-rows: 3fr 2fr;
    flex: 1;
    border: 1px solid var(--color-ln);

    & + .piano {
        border-left: none;
    }

    div {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        * {
            flex: 1;
            cursor: pointer;
            background-color: var(--color-ln);
            border: 1px solid var(--color-ln);
            border-top: none;
        }

        .extra {
            flex: 1.5;
        }

        .white {
            background-color: var(--color-bg);
            border: none;

            & + .white {
                border-left: 1px solid var(--color-ln);
            }
        }

        .selected {
            background-color: var(--color);
        }
    }
}
</style>
