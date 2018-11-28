/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbar = [
        { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike' ] },
        { name: 'links', items: [ 'Link', 'Unlink' ] },
        { name: 'insert', items: [ 'Image', 'Table' ] },
        { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
        { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', '-', 'Blockquote', 'CodeSnippet' ] },
        { name: 'styles', items: [ 'Format' ] },
        { name: 'colors', groups: [ 'colors' ] },
        { name: 'tools', items: [ 'Source', 'Maximize' ] }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Subscript,Superscript,Anchor';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;h4;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;image:Link;link:advanced;link:upload;flash:Upload';

    config.uiColor = '#ffffff';
    config.resize_dir = 'vertical';

    config.defaultLanguage = 'zh-cn';
    config.skin = 'moono-lisa';
    config.image_previewText = "开源中国 成立于2008年8月，是目前国内最大的开源技术社区，拥有超过200万会员，" +
        "形成了由开源软件库、代码分享、资讯、协作翻译、讨论区和博客等几大频道内容，" +
        "为IT开发者提供了一个发现、使用、并交流开源技术的平台。" +
        "2013年，开源中国建立大型综合性的云开发平台-中国源，" +
        "为中国广大开发者提供团队协作、源码托管、代码质量分析、代码评审、测试、代码演示平台等功能。" +
        "我们一直不遗余力地推动国内开源软件的应用和发展，为本土开源能力的提高、开源生态环境的优化提供长期推进的平台。";

    config.font_names =
        '默认/Lantinghei SC, Open Sans, Arial, Hiragino Sans GB, Microsoft YaHei, STHeiti, WenQuanYi Micro Hei, SimSun, sans-serif;' +
        '宋体/宋体, SimSun;' +
        '微软雅黑/微软雅黑, Microsoft YaHei;' +
        '楷体/楷体, 楷体_BG2312, SimKai;' +
        '黑体/黑体, SimHei;' +
        '隶书/隶书, SimLi;' +
        'Arial/Arial, Helvetica, sans-serif;' +
        'Comic Sans MS/Comic Sans MS, cursive;' +
        'Courier New/Courier New, Courier, monospace;' +
        'Georgia/Georgia, serif;' +
        'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;' +
        'Tahoma/Tahoma, Geneva, sans-serif;' +
        'Times New Roman/Times New Roman, Times, serif;' +
        'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
        'Verdana/Verdana, Geneva, sans-serif';

    config.codeSnippet_theme = 'zenburn';
    config.codeSnippet_languages = {
        apache       : 'Apache',
        bash         : 'Bash',
        cs           : 'C#',
        cpp          : 'C++',
        css          : 'CSS',
        coffeescript : 'CoffeeScript',
        delphi       : 'Delphi',
        diff         : 'Diff',
        go           : 'Go',
        groovy       : 'Groovy',
        html         : 'HTML',
        http         : 'HTTP',
        ini          : 'Ini',
        json         : 'JSON',
        java         : 'Java',
        javascript   : 'JavaScript',
        lua          : 'lua',
        makefile     : 'Makefile',
        markdown     : 'Markdown',
        nginx        : 'Nginx',
        objectivec   : 'Objective-C',
        php          : 'PHP',
        perl         : 'Perl',
        python       : 'Python',
        ruby         : 'Ruby',
        scala        : 'Scala',
        scss         : 'SCSS',
        sql          : 'SQL',
        swift        : 'Swift',
        vbscript     : 'VBScript',
        xml          : 'XML'
    };

    config.allowedContent = false; // 允许输入任何标签
    config.disallowedContent = 'img{width,height,float,margin,border-width,border-style}'; // 禁止的标签
    config.extraAllowedContent = 'img[width,height,align];video[controls,id,height,poster,width,autoplay];source[src,type];div(ref)'; // 允许的标签 div(ref) 为引用评论
    config.tabSpaces = 4;

    config.font_defaultLabel = '默认';

    //config.extraPlugins = 'uploadimage,flash';

    // 粘贴图片上传
    config.uploadUrl =  '/space/ckeditor_dialog_img_upload';

    // 选择图片上传
    config.filebrowserUploadUrl = '/space/ckeditor_dialog_img_upload';

};
