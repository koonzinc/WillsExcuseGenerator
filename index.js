function generateExcuse() {
    let who = ["My dog", "My aunt", "My sister", "My cousin", "My fish", "My other personality"]
    let action = ["ate", "chewed up", "peed on", "defacated on", "ran away with", "hid"]
    let what = ["my homework", "my car", "my shoes", "my face", "my socks", "my clothes"]
    let when = ["yesterday", "this morning", "last night", "last week", "10 minutes ago", "just now"]
    
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);
 
    document.getElementById("excuse").innerHTML = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
}




