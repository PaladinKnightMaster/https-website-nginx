<script setup>
// import { RouterView } from 'vue-router'
// import HomeView from './views/HomeView.vue'
import { list } from '@/api'
</script>

<template>
  <div class="ui-page ui-body-c ui-page-active" style="min-height: 454px;">   
    <center>
      <img id="j_idt4" alt="logo" src="@/assets/HACIENDA-SAT.jpg" style="width: 320px;"/>
    </center>
    <div v-if="!loading" id="pageContent" data-role="content" class="ui-content" role="main">
      <form id="ubicacionForm" name="ubicacionForm" method="post" action="/app/qr/faces/pages/mobile/validadorqr.jsf" class="ui-content" enctype="application/x-www-form-urlencoded" :model="postForm">
      <input type="hidden" name="ubicacionForm" value="ubicacionForm">
      <input id="ubicacionForm:iptRequiereUbicacion" name="ubicacionForm:iptRequiereUbicacion" type="hidden">
      <input id="ubicacionForm:iptUbicacion" name="ubicacionForm:iptUbicacion" type="hidden">
      <ul id="ubicacionForm:j_idt10" data-role="listview" data-inset="data-inset" style="margin: 1em -15px;" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">
        <li class="ui-li ui-li-static ui-body-c ui-corner-top ui-corner-bottom">
          El RFC: {{ postForm.rfc }}, tiene asociada la siguiente información.
        </li>
      </ul>
      <ul id="ubicacionForm:j_idt12:0:j_idt13" data-role="listview" data-inset="data-inset" style="margin: 1em -15px;" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">
        <li class="ui-li ui-li-divider ui-bar-b ui-corner-top">
          Datos de Identificación
        </li>
        <li class="ui-li ui-li-static ui-body-c ui-corner-bottom">
          <table id="ubicacionForm:j_idt12:0:j_idt13:j_idt15" class="ui-panelgrid ui-widget prueba" role="grid">
            <tbody>
              <tr class="ui-widget-content" role="row">
                <td role="gridcell">
                  <div id="ubicacionForm:j_idt12:0:j_idt13:j_idt16" class="ui-datatable ui-widget hide-column-names">
                    <div class="ui-datatable-tablewrapper">                      
                      <table role="grid">
                        <thead id="ubicacionForm:j_idt12:0:j_idt13:j_idt16_head">
                          <tr role="row">
                            <th id="ubicacionForm:j_idt12:0:j_idt13:j_idt16:j_idt17" class="ui-state-default" role="columnheader">
                              <span></span>
                            </th>
                            <th id="ubicacionForm:j_idt12:0:j_idt13:j_idt16:j_idt19" class="ui-state-default" role="columnheader" style="text-align:left;;width:50%">
                              <span></span>
                            </th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody id="ubicacionForm:j_idt12:0:j_idt13:j_idt16_data" class="ui-datatable-data ui-widget-content">
                          <tr data-ri="0" class="ui-widget-content ui-datatable-even" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Denominación o Razón Social:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              "{{ postForm.deno_social }}",
                            </td>
                          </tr>
                          <tr data-ri="1" class="ui-widget-content ui-datatable-odd" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Régimen de capital:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.capital_regime }}
                            </td>
                          </tr>
                          <tr data-ri="2" class="ui-widget-content ui-datatable-even" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Fecha de constitución:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ formatDate(postForm.constitution_date) }}
                            </td>
                          </tr>
                          <tr data-ri="3" class="ui-widget-content ui-datatable-odd" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Fecha de Inicio de operaciones:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ formatDate(postForm.op_start_date) }}
                            </td>
                          </tr>
                          <tr data-ri="4" class="ui-widget-content ui-datatable-even" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Situación del contribuyente:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.taxpayer_situation }}
                            </td>
                          </tr>
                          <tr data-ri="5" class="ui-widget-content ui-datatable-odd" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Fecha del último cambio de situación:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ formatDate(postForm.last_update_date) }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="ui-widget-content" role="row">
                <td role="gridcell"></td>
              </tr>
              <tr class="ui-widget-content" role="row">
                <td role="gridcell">
                  <div id="ubicacionForm:j_idt12:0:j_idt13:j_idt27" class="ui-datatable ui-widget hide-column-names">
                    <div class="ui-datatable-tablewrapper">
                      <table role="grid">
                        <thead id="ubicacionForm:j_idt12:0:j_idt13:j_idt27_head">
                          <tr role="row">
                            <th id="ubicacionForm:j_idt12:0:j_idt13:j_idt27:j_idt29" class="ui-state-default" role="columnheader" style="text-align:center;">
                              <span></span>
                            </th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody id="ubicacionForm:j_idt12:0:j_idt13:j_idt27_data" class="ui-datatable-data ui-widget-content">
                          <tr class="ui-widget-content ui-datatable-empty-message">
                            <td colspan="1"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="ui-widget-content" role="row"></tr>
              <tr class="ui-widget-content" role="row"></tr>
              <tr class="ui-widget-content" role="row"></tr>
            </tbody>
          </table>
        </li>
      </ul>
      <ul id="ubicacionForm:j_idt12:1:j_idt13" data-role="listview" data-inset="data-inset" style="margin: 1em -15px;" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">
        <li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-b ui-corner-top">
          Datos de Ubicación (domicilio fiscal, vigente)
        </li>
        <li class="ui-li ui-li-static ui-body-c ui-corner-bottom">
          <table id="ubicacionForm:j_idt12:1:j_idt13:j_idt15" class="ui-panelgrid ui-widget prueba" role="grid">
            <tbody>
              <tr class="ui-widget-content" role="row">
                <td role="gridcell">
                  <div id="ubicacionForm:j_idt12:1:j_idt13:j_idt16" class="ui-datatable ui-widget hide-column-names">
                    <div class="ui-datatable-tablewrapper">
                      <table role="grid">
                        <thead id="ubicacionForm:j_idt12:1:j_idt13:j_idt16_head">
                          <tr role="row">
                            <th id="ubicacionForm:j_idt12:1:j_idt13:j_idt16:j_idt17" class="ui-state-default" role="columnheader">
                              <span></span>
                            </th>
                            <th id="ubicacionForm:j_idt12:1:j_idt13:j_idt16:j_idt19" class="ui-state-default" role="columnheader" style="text-align:left;;width:50%">
                              <span></span>
                            </th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody id="ubicacionForm:j_idt12:1:j_idt13:j_idt16_data" class="ui-datatable-data ui-widget-content">
                          <tr data-ri="0" class="ui-widget-content ui-datatable-even" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Entidad Federativa:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.federal_entity }}
                            </td>
                          </tr>
                          <tr data-ri="1" class="ui-widget-content ui-datatable-odd" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Municipio o delegación:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.muni_dele }}
                            </td>
                          </tr>
                          <tr data-ri="2" class="ui-widget-content ui-datatable-even" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Colonia:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.colonia }}
                            </td>
                          </tr>
                          <tr data-ri="3" class="ui-widget-content ui-datatable-odd" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Tipo de vialidad:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.road_type }}
                            </td>
                          </tr>
                          <tr data-ri="4" class="ui-widget-content ui-datatable-even" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Nombre de la vialidad:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.road_name }}
                            </td>
                          </tr>
                          <tr data-ri="5" class="ui-widget-content ui-datatable-odd" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Número exterior:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.outdoor_num }}
                            </td>
                          </tr>
                          <tr data-ri="6" class="ui-widget-content ui-datatable-even" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Número interior:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.inside_num }}
                            </td>
                          </tr>
                          <tr data-ri="7" class="ui-widget-content ui-datatable-odd" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                CP:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.cp }}
                            </td>
                          </tr>
                          <tr data-ri="8" class="ui-widget-content ui-datatable-even" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Correo electrónico:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.email }}
                            </td>
                          </tr>
                          <tr data-ri="9" class="ui-widget-content ui-datatable-odd" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                AL:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.al }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="ui-widget-content" role="row">
                <td role="gridcell"></td>
              </tr>
              <tr class="ui-widget-content" role="row">
                <td role="gridcell">
                  <div id="ubicacionForm:j_idt12:1:j_idt13:j_idt27" class="ui-datatable ui-widget hide-column-names">
                    <div class="ui-datatable-tablewrapper">
                      <table role="grid">
                        <thead id="ubicacionForm:j_idt12:1:j_idt13:j_idt27_head">
                          <tr role="row">
                            <th id="ubicacionForm:j_idt12:1:j_idt13:j_idt27:j_idt29" class="ui-state-default" role="columnheader" style="text-align:center;">
                              <span></span>
                            </th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody id="ubicacionForm:j_idt12:1:j_idt13:j_idt27_data" class="ui-datatable-data ui-widget-content">
                          <tr class="ui-widget-content ui-datatable-empty-message">
                            <td colspan="1"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="ui-widget-content" role="row"></tr>
              <tr class="ui-widget-content" role="row"></tr>
              <tr class="ui-widget-content" role="row"></tr>
            </tbody>
          </table>
        </li>
      </ul>
      <ul id="ubicacionForm:j_idt12:2:j_idt13" data-role="listview" data-inset="data-inset" style="margin: 1em -15px;" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">
        <li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-b ui-corner-top">
          Características fiscales (vigente)
        </li>
        <li class="ui-li ui-li-static ui-body-c ui-corner-bottom">
          <table id="ubicacionForm:j_idt12:2:j_idt13:j_idt15" class="ui-panelgrid ui-widget prueba" role="grid">
            <tbody>
              <tr class="ui-widget-content" role="row">
                <td role="gridcell">
                  <div id="ubicacionForm:j_idt12:2:j_idt13:j_idt16" class="ui-datatable ui-widget hide-column-names">
                    <div class="ui-datatable-tablewrapper">
                      <table role="grid">
                        <thead id="ubicacionForm:j_idt12:2:j_idt13:j_idt16_head">
                          <tr role="row">
                            <th id="ubicacionForm:j_idt12:2:j_idt13:j_idt16:j_idt17" class="ui-state-default" role="columnheader">
                              <span></span>
                            </th>
                            <th id="ubicacionForm:j_idt12:2:j_idt13:j_idt16:j_idt19" class="ui-state-default" role="columnheader" style="text-align:left;;width:50%">
                              <span></span>
                            </th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody id="ubicacionForm:j_idt12:2:j_idt13:j_idt16_data" class="ui-datatable-data ui-widget-content">
                          <tr data-ri="0" class="ui-widget-content ui-datatable-even" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Régimen:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ postForm.regime }}
                            </td>
                          </tr>
                          <tr data-ri="1" class="ui-widget-content ui-datatable-odd" role="row">
                            <td role="gridcell">
                              <span style="font-weight: bold;">
                                Fecha de alta:
                              </span>
                            </td>
                            <td role="gridcell" style="text-align:left;">
                              {{ formatDate(postForm.discharge_date) }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="ui-widget-content" role="row">
                <td role="gridcell"></td>
              </tr>
              <tr class="ui-widget-content" role="row">
                <td role="gridcell">
                  <div id="ubicacionForm:j_idt12:2:j_idt13:j_idt27" class="ui-datatable ui-widget hide-column-names">
                    <div class="ui-datatable-tablewrapper">
                      <table role="grid">
                        <thead id="ubicacionForm:j_idt12:2:j_idt13:j_idt27_head">
                          <tr role="row">
                            <th id="ubicacionForm:j_idt12:2:j_idt13:j_idt27:j_idt29" class="ui-state-default" role="columnheader" style="text-align:center;">
                              <span></span>
                            </th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody id="ubicacionForm:j_idt12:2:j_idt13:j_idt27_data" class="ui-datatable-data ui-widget-content">
                          <tr class="ui-widget-content ui-datatable-empty-message">
                            <td colspan="1"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="ui-widget-content" role="row"></tr>
              <tr class="ui-widget-content" role="row"></tr>
              <tr class="ui-widget-content" role="row"></tr>
            </tbody>
          </table>
        </li>
      </ul>
      <input type="hidden" name="javax.faces.ViewState" id="javax.faces.ViewState" value="2438400014281292425:7715062273705037955" autocomplete="off">
      </form>
    </div>
    <div v-else >
      LOADING...
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
const defaultForm = {
  rfc: '',
  deno_social: '',
  capital_regime: '',
  constitution_date: '',
  op_start_date: '',
  taxpayer_situation: '',
  last_update_date: '',
  federal_entity: '',
  muni_dele: '',
  colonia: '',
  road_type: '',
  road_name: '',
  outdoor_num: '',
  inside_num: '',
  cp: '',
  email: '',
  al: '',
  regime: '',
  discharge_date: ''
}
export default {
  data() {
    return {
      postForm: Object.assign({}, defaultForm),
      loading: false,
      query : {
        d1: null,
        d2: null,
        d3: null
      }
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.query,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    formatDate(date) {
      // console.log(date)
      if (!date)
        return ''
      const date_str = new Date(date).toISOString().split('T')[0]
      // console.log(date_str)
      const date_list = date_str.split('-')
      // console.log(date_list)
      return date_list[1]+'-'+date_list[2]+'-'+date_list[0]
    },
    fetchData() {
      this.loading = true
      console.log("fetchData!!!")
      const { D1, D2, D3 } = this.$route.query
      console.log(D1)
      console.log(D2)
      console.log(D3)
      console.log(this.$route.query)
      console.log("END!!!")
      // replace `getPost` with your data fetching util / API wrapper
      const data = {
        d1: D1,
        d2: D2,
        d3: D3
      }
      list({ d1: D1, d2: D2, d3: D3 }).then(response => {
        console.log("result!!!!")
        console.log(response.data)
        if (response.data == {}) {
          this.loading = false
          return
        }
        this.postForm = Object.assign(this.postForm, response.data)
        this.loading = false
      })      
    }
  },
}
</script>