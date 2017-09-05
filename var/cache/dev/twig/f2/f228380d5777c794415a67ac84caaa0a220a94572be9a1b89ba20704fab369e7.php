<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_4474101226d255a74a7722c10385d40bcfba8957126e175f8449abe3558173aa extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_bdc288caa0b25a49f18e84a6a952eac9a513b4eb8aa582605ccb879717a7a1a3 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_bdc288caa0b25a49f18e84a6a952eac9a513b4eb8aa582605ccb879717a7a1a3->enter($__internal_bdc288caa0b25a49f18e84a6a952eac9a513b4eb8aa582605ccb879717a7a1a3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $__internal_b2fc6f7ccab85070e28339849be5a3e2b98efd25cc2d16b615301211e7f33691 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_b2fc6f7ccab85070e28339849be5a3e2b98efd25cc2d16b615301211e7f33691->enter($__internal_b2fc6f7ccab85070e28339849be5a3e2b98efd25cc2d16b615301211e7f33691_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_bdc288caa0b25a49f18e84a6a952eac9a513b4eb8aa582605ccb879717a7a1a3->leave($__internal_bdc288caa0b25a49f18e84a6a952eac9a513b4eb8aa582605ccb879717a7a1a3_prof);

        
        $__internal_b2fc6f7ccab85070e28339849be5a3e2b98efd25cc2d16b615301211e7f33691->leave($__internal_b2fc6f7ccab85070e28339849be5a3e2b98efd25cc2d16b615301211e7f33691_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_f112ce422a68b105595aeabfd85bfccac8d90a8551dbb08407abedfa8fc067ba = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_f112ce422a68b105595aeabfd85bfccac8d90a8551dbb08407abedfa8fc067ba->enter($__internal_f112ce422a68b105595aeabfd85bfccac8d90a8551dbb08407abedfa8fc067ba_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_7df4d1e5a44602748cebb480c1384ffe9a121c5be72d8a72a3675365818572d8 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_7df4d1e5a44602748cebb480c1384ffe9a121c5be72d8a72a3675365818572d8->enter($__internal_7df4d1e5a44602748cebb480c1384ffe9a121c5be72d8a72a3675365818572d8_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_7df4d1e5a44602748cebb480c1384ffe9a121c5be72d8a72a3675365818572d8->leave($__internal_7df4d1e5a44602748cebb480c1384ffe9a121c5be72d8a72a3675365818572d8_prof);

        
        $__internal_f112ce422a68b105595aeabfd85bfccac8d90a8551dbb08407abedfa8fc067ba->leave($__internal_f112ce422a68b105595aeabfd85bfccac8d90a8551dbb08407abedfa8fc067ba_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_a8d413ba767827c1738d80962ff485584ab6b06b0775d99dca89d56a84dbfe8e = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_a8d413ba767827c1738d80962ff485584ab6b06b0775d99dca89d56a84dbfe8e->enter($__internal_a8d413ba767827c1738d80962ff485584ab6b06b0775d99dca89d56a84dbfe8e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_b53f9101095caafb6f5e2e63b099c452a89c14a3d0770c68ea800837730aafd5 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_b53f9101095caafb6f5e2e63b099c452a89c14a3d0770c68ea800837730aafd5->enter($__internal_b53f9101095caafb6f5e2e63b099c452a89c14a3d0770c68ea800837730aafd5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_b53f9101095caafb6f5e2e63b099c452a89c14a3d0770c68ea800837730aafd5->leave($__internal_b53f9101095caafb6f5e2e63b099c452a89c14a3d0770c68ea800837730aafd5_prof);

        
        $__internal_a8d413ba767827c1738d80962ff485584ab6b06b0775d99dca89d56a84dbfe8e->leave($__internal_a8d413ba767827c1738d80962ff485584ab6b06b0775d99dca89d56a84dbfe8e_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_ff1be72e84f593830b19795695c6a2660301a51d8e2ee370581006a5b98da021 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_ff1be72e84f593830b19795695c6a2660301a51d8e2ee370581006a5b98da021->enter($__internal_ff1be72e84f593830b19795695c6a2660301a51d8e2ee370581006a5b98da021_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_e0dc2ec33e945fc3ac10c0ba77420c71b144cd2dd237922ffa88ec3b911b6816 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_e0dc2ec33e945fc3ac10c0ba77420c71b144cd2dd237922ffa88ec3b911b6816->enter($__internal_e0dc2ec33e945fc3ac10c0ba77420c71b144cd2dd237922ffa88ec3b911b6816_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_router", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_e0dc2ec33e945fc3ac10c0ba77420c71b144cd2dd237922ffa88ec3b911b6816->leave($__internal_e0dc2ec33e945fc3ac10c0ba77420c71b144cd2dd237922ffa88ec3b911b6816_prof);

        
        $__internal_ff1be72e84f593830b19795695c6a2660301a51d8e2ee370581006a5b98da021->leave($__internal_ff1be72e84f593830b19795695c6a2660301a51d8e2ee370581006a5b98da021_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 13,  85 => 12,  71 => 7,  68 => 6,  59 => 5,  42 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% block toolbar %}{% endblock %}

{% block menu %}
<span class=\"label\">
    <span class=\"icon\">{{ include('@WebProfiler/Icon/router.svg') }}</span>
    <strong>Routing</strong>
</span>
{% endblock %}

{% block panel %}
    {{ render(path('_profiler_router', { token: token })) }}
{% endblock %}
", "@WebProfiler/Collector/router.html.twig", "/home/florian/Documents/5A/projet-web-5A/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/router.html.twig");
    }
}
