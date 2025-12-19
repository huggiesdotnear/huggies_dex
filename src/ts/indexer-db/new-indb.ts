import InDB from 'indb'
//
const huggies_indb_const = new InDB({
  name: 'huggies-dex-db',
  version: 1,
  stores: [
    {
      name: 'mainnet_pools',
      primaryKeyPath: 'id',
    },
    {
      name: 'testnet_pools',
      primaryKeyPath: 'id',
    }
  ],
});
//
export const huggies_mainnet_pools_indb_const = huggies_indb_const.use('mainnet_pools');
export const huggies_testnet_pools_indb_const = huggies_indb_const.use('testnet_pools');