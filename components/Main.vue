<template>
  <div v-if="step === 0">
    <form>
      <textarea v-model="details" placeholder="Detalles del reporte" />
      <button type="button" @click="step++">Generar</button>
    </form>
  </div>
  <div v-else-if="step === 1">
    <form>
      <input v-model="signature" placeholder="Clave publica" />
      <button type="button" @click="step++">Nuevo</button>
      <button type="button" @click="step--">back</button>
    </form>
  </div>
  <div v-else-if="step === 2">
    <p>{{ details }}</p>
    <button type="button" @click="step--">back</button>
  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      details: "",
      signature: "",
      step: 0,
    };
  },
};
</script>
