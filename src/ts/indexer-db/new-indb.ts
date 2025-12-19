import InDB from 'indb'
//
const huggies_indb_const = new InDB({
  name: 'huggies-dex-db',
  version: 1,
  stores: [
    {
      name: 'pools',
      primaryKeyPath: 'id',
    }
  ],
})
//
export const huggies_pools_indb_const = huggies_indb_const.use('pools')