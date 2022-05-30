<template>
    <div>
        index dashboard
    </div>
</template>

<script>
// import {Ability, AbilityBuilder, ForbiddenError} from "@casl/ability"
// export default {
//     mounted() {
//         const defineAbility = (user = {}) => {    

//             const {can, cannot, build} = new AbilityBuilder(Ability);

//             if(user.isAdmin) {
//                 can('manage', 'all');
//             }
            
//             can('create', 'mascotas');
//             can('read', 'mascotas');
//             can('update', 'mascotas', {authorId: user.id});
//             cannot('delete', 'mascotas').because('no puedes editar este registro');

//             can('create', 'roles');
//             return build;
//         }

//         const user = {
//             id: 5,
//             isAdmin: false,
//         }

//         // class Mascota {
//         //     constructor(authorId) {
//         //         this.authorId = authorId;
//         //     }
//         // }

//         // const SomeMascota = new Mascota(5);

//         const ability = defineAbility(user);

        
//         try {
//             const isAlowed = ability().can('update', 'mascotas');
//             alert(isAlowed);
//         } catch (error) {
//             alert(error);
//         }
        
//         ForbiddenError.from(ability).throwUnlessCan('update', 'mascotas');
//         }

        
//     }

</script>