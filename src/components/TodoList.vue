<template>
  <div>
    <ul>
      <li class="mb-1" v-for="(item, index) in todos" :key='index'>
        <Todo
          v-bind:title='item.title'
          v-bind:description='item.description'
          v-bind:dueDate='item.dueDate'
          v-bind:status='item.status'
          v-bind:index='index'
        />
        {{index}}
        <button v-on:click="removeEl(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex';

export default {
  name: 'TodoList',
  components: { Todo },
  computed: {
    ...mapGetters([
      'todos',
    ])
  },
  methods: {
    ...mapActions(['remove']),
    removeEl: function(id) {
      this.remove(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mb-1 {
  margin-bottom: 1rem;
}
ul {
  list-style-type: none;
}
</style>
