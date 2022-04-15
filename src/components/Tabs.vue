<script setup>
import String from "./String.vue";

const props = defineProps({
    notes: Set,
    strings: Array,
    length: Number,
});
</script>

<template>
    <div class="guitar">
        <div :style="{ '--strings': props.strings.length }">
            <string v-for="o in props.strings" :notes="props.notes" :offset="o" :length="props.length" />
        </div>

        <div>
            <span v-for="index in props.length + 1">{{ index - 1 }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.guitar {
    display: grid;
    grid-template-rows: 1fr auto;
    user-select: none;

    > :first-child {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        position: relative;

        * {
            flex: 1;
        }

        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: calc(50% / var(--strings));
            background-color: var(--color-bg);
            z-index: 100;
        }

        &::before {
            top: 0;
            border-bottom: 1px solid var(--color-ln);
        }

        &::after {
            bottom: 0;
            border-top: 1px solid var(--color-ln);
        }
    }

    > :last-child {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        font-size: 0.75em;

        * {
            display: inline-flex;
            flex-direction: row;
            justify-content: center;
            width: 0;
        }
    }
}
</style>
