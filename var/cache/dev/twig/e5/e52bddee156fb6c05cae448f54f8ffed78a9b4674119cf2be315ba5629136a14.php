<?php

/* base.html.twig */
class __TwigTemplate_0f7392102991309cf27a0a919ffad8cb4a1ac73166363ccbc7b612edd07f4f0c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_459fb70b7ec359e007229898265cbbe35ec8eafff0e3c99df71e1bd659fc7d20 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_459fb70b7ec359e007229898265cbbe35ec8eafff0e3c99df71e1bd659fc7d20->enter($__internal_459fb70b7ec359e007229898265cbbe35ec8eafff0e3c99df71e1bd659fc7d20_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        $__internal_69232e7c61f91ecc0c632046192754ab5220ec047b97ad3b04868b846150f8d6 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_69232e7c61f91ecc0c632046192754ab5220ec047b97ad3b04868b846150f8d6->enter($__internal_69232e7c61f91ecc0c632046192754ab5220ec047b97ad3b04868b846150f8d6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\" />
        <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        ";
        // line 6
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 7
        echo "        <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
    </head>
    <body>
        ";
        // line 10
        $this->displayBlock('body', $context, $blocks);
        // line 11
        echo "        ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 12
        echo "    </body>
</html>
";
        
        $__internal_459fb70b7ec359e007229898265cbbe35ec8eafff0e3c99df71e1bd659fc7d20->leave($__internal_459fb70b7ec359e007229898265cbbe35ec8eafff0e3c99df71e1bd659fc7d20_prof);

        
        $__internal_69232e7c61f91ecc0c632046192754ab5220ec047b97ad3b04868b846150f8d6->leave($__internal_69232e7c61f91ecc0c632046192754ab5220ec047b97ad3b04868b846150f8d6_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_68ab2e0bb44660cf530db34d3db1bfba417893642bfa5892d7a49d74ebc9c2b4 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_68ab2e0bb44660cf530db34d3db1bfba417893642bfa5892d7a49d74ebc9c2b4->enter($__internal_68ab2e0bb44660cf530db34d3db1bfba417893642bfa5892d7a49d74ebc9c2b4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        $__internal_afa42760e88ee38712549ce978b88ed6795fa3e5161e559aa349613117408647 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_afa42760e88ee38712549ce978b88ed6795fa3e5161e559aa349613117408647->enter($__internal_afa42760e88ee38712549ce978b88ed6795fa3e5161e559aa349613117408647_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_afa42760e88ee38712549ce978b88ed6795fa3e5161e559aa349613117408647->leave($__internal_afa42760e88ee38712549ce978b88ed6795fa3e5161e559aa349613117408647_prof);

        
        $__internal_68ab2e0bb44660cf530db34d3db1bfba417893642bfa5892d7a49d74ebc9c2b4->leave($__internal_68ab2e0bb44660cf530db34d3db1bfba417893642bfa5892d7a49d74ebc9c2b4_prof);

    }

    // line 6
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_5e4f0b16b26b88c81f75a288accff30b8c3ff78d7a8d8ab7da647afd6e01d9f8 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_5e4f0b16b26b88c81f75a288accff30b8c3ff78d7a8d8ab7da647afd6e01d9f8->enter($__internal_5e4f0b16b26b88c81f75a288accff30b8c3ff78d7a8d8ab7da647afd6e01d9f8_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_ee3c285c1b7b19c9fa366bad5e975b1d86634231d024c1ad6a44f4d923e4073f = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_ee3c285c1b7b19c9fa366bad5e975b1d86634231d024c1ad6a44f4d923e4073f->enter($__internal_ee3c285c1b7b19c9fa366bad5e975b1d86634231d024c1ad6a44f4d923e4073f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_ee3c285c1b7b19c9fa366bad5e975b1d86634231d024c1ad6a44f4d923e4073f->leave($__internal_ee3c285c1b7b19c9fa366bad5e975b1d86634231d024c1ad6a44f4d923e4073f_prof);

        
        $__internal_5e4f0b16b26b88c81f75a288accff30b8c3ff78d7a8d8ab7da647afd6e01d9f8->leave($__internal_5e4f0b16b26b88c81f75a288accff30b8c3ff78d7a8d8ab7da647afd6e01d9f8_prof);

    }

    // line 10
    public function block_body($context, array $blocks = array())
    {
        $__internal_75431a5314a8f41a9eeb75214cc6cfca8ced6ad8f128cad8afbe883deded31b3 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_75431a5314a8f41a9eeb75214cc6cfca8ced6ad8f128cad8afbe883deded31b3->enter($__internal_75431a5314a8f41a9eeb75214cc6cfca8ced6ad8f128cad8afbe883deded31b3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        $__internal_fe9d3a5ffe45b639fffbdbaa85ebeb74338a321d768096405470e9a60db82325 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_fe9d3a5ffe45b639fffbdbaa85ebeb74338a321d768096405470e9a60db82325->enter($__internal_fe9d3a5ffe45b639fffbdbaa85ebeb74338a321d768096405470e9a60db82325_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_fe9d3a5ffe45b639fffbdbaa85ebeb74338a321d768096405470e9a60db82325->leave($__internal_fe9d3a5ffe45b639fffbdbaa85ebeb74338a321d768096405470e9a60db82325_prof);

        
        $__internal_75431a5314a8f41a9eeb75214cc6cfca8ced6ad8f128cad8afbe883deded31b3->leave($__internal_75431a5314a8f41a9eeb75214cc6cfca8ced6ad8f128cad8afbe883deded31b3_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_e63529b08f5cbb8f1362f5677baee8ecd1fbebfbd44bfc334717c306b445abe9 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_e63529b08f5cbb8f1362f5677baee8ecd1fbebfbd44bfc334717c306b445abe9->enter($__internal_e63529b08f5cbb8f1362f5677baee8ecd1fbebfbd44bfc334717c306b445abe9_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_e4a42ccf447ee00c609ec91ebc0b51e5d92c6867367ebd2522234f3669af15d7 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_e4a42ccf447ee00c609ec91ebc0b51e5d92c6867367ebd2522234f3669af15d7->enter($__internal_e4a42ccf447ee00c609ec91ebc0b51e5d92c6867367ebd2522234f3669af15d7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_e4a42ccf447ee00c609ec91ebc0b51e5d92c6867367ebd2522234f3669af15d7->leave($__internal_e4a42ccf447ee00c609ec91ebc0b51e5d92c6867367ebd2522234f3669af15d7_prof);

        
        $__internal_e63529b08f5cbb8f1362f5677baee8ecd1fbebfbd44bfc334717c306b445abe9->leave($__internal_e63529b08f5cbb8f1362f5677baee8ecd1fbebfbd44bfc334717c306b445abe9_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  117 => 11,  100 => 10,  83 => 6,  65 => 5,  53 => 12,  50 => 11,  48 => 10,  41 => 7,  39 => 6,  35 => 5,  29 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\" />
        <title>{% block title %}Welcome!{% endblock %}</title>
        {% block stylesheets %}{% endblock %}
        <link rel=\"icon\" type=\"image/x-icon\" href=\"{{ asset('favicon.ico') }}\" />
    </head>
    <body>
        {% block body %}{% endblock %}
        {% block javascripts %}{% endblock %}
    </body>
</html>
", "base.html.twig", "/home/florian/Documents/5A/projet-web-5A/app/Resources/views/base.html.twig");
    }
}
