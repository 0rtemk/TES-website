import { AbilityBuilder, Ability } from '@casl/ability';

const roleRules = (can, role, cannot) => {
    //fix this later
    if (role === 'visitor') {
        can('get', 'auth')
    }
    else if (role === "user") {
        can('get', 'lk')
    }
};

export const defineRulesFor = (role) => {
    const { can, rules, cannot } = new AbilityBuilder(Ability);
    roleRules(can, role, cannot);
    return rules;
};

export const buildAbilityFor = (role) => {
    console.log(role)
    return new Ability(defineRulesFor(role));
};

export let ability = buildAbilityFor('visitor')

export const setRole = (role) => {
    ability = buildAbilityFor(role)
}
