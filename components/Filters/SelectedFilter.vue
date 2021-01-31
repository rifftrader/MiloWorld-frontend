<template>
  <div>
    <div class="selected-filter row border item-thumbnail">
      <div class="col-10 text-left description font-weight-bold">
        {{ appliedFilter }}
      </div>
      <div class="col-2 text-right icon">
        <i class="fas fa-backspace" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedFilter',
  props: {
    appliedFilter: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>
.selected-filter {
  border-radius: 5px;
  margin: 15px 0 10px 0;
  padding: 10px;
  background-color: #039c81;
  color: white;
}

.description {
 padding: 0;
}

.icon {
  padding: 0;
  color: white;
}

.fas {
  cursor: pointer;

}

.fas:hover {
}

</style>
