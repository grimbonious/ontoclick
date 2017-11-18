import Vue from 'vue';

export default {
  requestKeys: {
    query: 'q',
    limit: 'pagesize',
    page: 'page'
  },
  headings: {
    notation: 'Notation',
    prefLabel: 'Label'
  },
  pagination: {
    dropdown: false
  },
  requestFunction: (data) => {
    return Vue.http.get('https://data.bioontology.org/search', {
        params: {
          /* apikey: 'TODO - inject from config', */
          q: data.q,
          pagesize: 5,
          page: data.page,
          include: 'prefLabel,synonym,definition,notation,cui,semanticType',
          ontologies: 'HP'
        },
        headers: {
          'Referrer': 'http://data.bioontology.org/'
        }
      })
      .catch((e) => {
        this.dispatch('error', e);
      }).bind(this);
  },
  responseAdapter: (response) => {
    return response.data ? {
      data: response.data.collection,
      count: response.data.totalCount
    } : {
      data: [],
      count: 0
    }
  }
}
