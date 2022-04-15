<script setup>
import colors from "../js/colors";

const props = defineProps({
    notes: Set,
    offset: Number,
    length: Number,
});

function pressFret(index) {
    const note = noteOf(index);

    if (props.notes.has(note)) {
        props.notes.delete(note);
    } else {
        props.notes.add(note);
    }
}

function noteOf(index) {
    const note = (index + props.offset) % 12;
    return note;
}
</script>

<template>
    <div class="string">
        <div
            v-for="index in props.length + 1"
            :style="{ '--color': colors[noteOf(index - 1)] }"
            :class="{ selected: props.notes.has(noteOf(index - 1)) }"
            @click="pressFret(index - 1)"
        ></div>
    </div>
</template>

<style lang="scss">
.string {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    * {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex: 1;
        border-right: 1px solid var(--color-ln);
        cursor: pointer;

        &:first-child {
            border-right: 5px solid var(--color-ln);

            &::before {
                top: 0;
                background-color: var(--color-bg);
                height: 100%;
                z-index: 150;
            }
        }

        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            background-color: var(--color-ln);
            width: 100%;
            height: 1px;
        }

        &::after {
            content: "";
            display: block;
            position: absolute;
            height: 50%;
            max-width: 50%;
            aspect-ratio: 1;
            border-radius: 9999px;
            z-index: 200;
            background-color: transparent;
        }

        &:hover::after {
            border: 1px solid var(--color-ln);
            background-color: transparent;
        }

        &.selected::after {
            border: 1px solid var(--color-ln);
            background-color: var(--color);
        }
    }
}
</style>
