import { defineAbility } from "@casl/ability";
import store from "@/store";
export default (user) => defineAbility((can) => {
    let permissions = store.getters.mypermissions;
    console.log('permisos '+JSON.stringify(permissions));
    if (permissions) {
        permissions.forEach(permission => {
            // if(permission['description']){
            //     can(`${permission['description']}`, `${permission['name']}`);
            // }else {
                can(`${permission['description']}`, `${permission['name']}`, {authorId: user.id});
            // }            
        });         
    }
    // can('mascotas', 'mascotas');
    
});