4. //Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

function getAttributes() {
    const linkAttributes = document.getElementById('w3r').attributes;
    console.log(`
    href: ${linkAttributes.href.value}, 
    hreflang: ${linkAttributes.hreflang.value}, 
    rel: ${linkAttributes.rel.value},
    target: ${linkAttributes.target.value},
    and
    type: ${linkAttributes.type.value}`
    );
}