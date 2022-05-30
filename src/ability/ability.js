import { defineAbility } from "@casl/ability";
import store from "@/store";
export default defineAbility((can) => {
    let permissions = store.getters.mypermissions;
    alert(JSON.stringify(permissions));
    if (permissions) {
        permissions.forEach(permission => {
            // alert(permission['description'] +' ' +permission['name']);
            can(`${permission['description']}`, `${permission['name']}`);
        }); 
        // can('create mascotas', 'mascotas.create')
    }
    
});