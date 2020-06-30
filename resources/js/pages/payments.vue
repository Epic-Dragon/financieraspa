<template>
    <v-container
      id="regular-tables"
      fluid
      tag="section"
    >
      <v-card>
        <v-card-title
        class="d-flex justify-space-between"
        >
          Resumen de pagos
          <v-btn
            fab 
            color="primary"
            dark
            @click="download"
            >
            <v-icon dark>mdi-download</v-icon>
          </v-btn>
        </v-card-title>
          <v-data-table 
          :headers="headers"
          :items="payments"
          :sort-by="['id']" 
           class="elevation-1"
          > 
          <template v-slot:item.name="{ item }">
            {{ item.client.name }}
          </template>
          
            <template v-slot:item.Actions="{ item }">
              <div class="my-2">
                <v-btn color="primary" 
                fab x-small dark
                :to="{ name: 'Pagos Cliente', params: {id: item.id} }"
                >
                  <v-icon>mdi-account-details</v-icon>
                </v-btn>
              </div> 
            </template>
          </v-data-table>
      </v-card>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  const axios = require("axios");
  export default {
    name: 'payments',
    data: function () {
      return {
        editing: false,
        openModal: false,
        loan: {
          client_id: '',
          amount: '',
          payments_number: '',
          fee: '',
          ministry_date: '',
          due_date: ''
        },
        headers: [
          { text: 'id', value: 'id' },
          { text: 'Nombre', value: 'name' },
          { text: 'Cantidad', value: 'amount' },
          { text: 'Cuota ', value: 'fee' },
          { text: 'Número de pagos ', value: 'payments_number' },
          { text: 'Pagos completados ', value: 'pagos_completados' },
          { text: 'Saldo abonado ', value: 'saldo_abonado' },
          { text: 'Saldo pendiente ', value: 'saldo_pendiente' },
          { text: 'Acciones', value: 'Actions' },
        ],
      }
    },
    computed: {
        ...mapState({
            payments: state=>state.paymentsIndex,
        })
    },
    mounted () {
      this.getPaymentsIndex();
    },
    methods: {
      download(){
        window.open('http://financiera.test.local/api/payments/download', '.xlsx');
        /* axios.get('/api/payments/donwload')
          .then(response => {
            console.log('descargado')
          })
          .catch(error => 'error') */
      },
      changeModal (flag){
        this.openModal = flag;
      },
      choose (){
        if(this.editing)
          this.edit()
        else
          this.save()
      },
      edit (){
        //
      },
      save (){
        //
      },  
      getPaymentsIndex (){
          this.$store.dispatch('getPaymentsIndex');
      },
      deleteItem(item){
        //
      }
    }
  }
</script>
