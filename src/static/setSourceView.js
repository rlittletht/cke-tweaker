
console.log('hi from the document...');

if (window)
{
    console.log("doc: window=" + window);
    if (window.CKEDITOR)
    {
        console.log("doc: window.CKEDITOR=" + window.CKEDITOR);
        if (window.CKEDITOR.config)
        {
            console.log("before: window.CKEDITOR.config.startupMode=" + window.CKEDITOR.config.startupMode);
            window.CKEDITOR.config.startupMode = 'source';
            console.log("after: window.CKEDITOR.config.startupMode=" + window.CKEDITOR.config.startupMode);
        }
    }
}