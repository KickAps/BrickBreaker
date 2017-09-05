<?php

/* @WebProfiler/Collector/exception.html.twig */
class __TwigTemplate_a611f92a27af130951d9078fddf1bbafe1cc49e2bd58b9706ba15334252c5e8a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/exception.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
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
        $__internal_aa3261da15ed3e7c6e5700a90cf190458c949ef98946aeee61cb7a3bea3653cf = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_aa3261da15ed3e7c6e5700a90cf190458c949ef98946aeee61cb7a3bea3653cf->enter($__internal_aa3261da15ed3e7c6e5700a90cf190458c949ef98946aeee61cb7a3bea3653cf_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $__internal_5bc712c512da5e70b3d09a5a976219d0667e90068679446325a1e78ff1622e1b = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_5bc712c512da5e70b3d09a5a976219d0667e90068679446325a1e78ff1622e1b->enter($__internal_5bc712c512da5e70b3d09a5a976219d0667e90068679446325a1e78ff1622e1b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_aa3261da15ed3e7c6e5700a90cf190458c949ef98946aeee61cb7a3bea3653cf->leave($__internal_aa3261da15ed3e7c6e5700a90cf190458c949ef98946aeee61cb7a3bea3653cf_prof);

        
        $__internal_5bc712c512da5e70b3d09a5a976219d0667e90068679446325a1e78ff1622e1b->leave($__internal_5bc712c512da5e70b3d09a5a976219d0667e90068679446325a1e78ff1622e1b_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_b107943dd6f5167f361694ddcffdd55ff9e6c795d62c2fa1ae6694f77ba83fb7 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_b107943dd6f5167f361694ddcffdd55ff9e6c795d62c2fa1ae6694f77ba83fb7->enter($__internal_b107943dd6f5167f361694ddcffdd55ff9e6c795d62c2fa1ae6694f77ba83fb7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        $__internal_57ba05cc3d539bd7840793feca073b38a3c9b673538a35a1ef8117fd775a23c3 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_57ba05cc3d539bd7840793feca073b38a3c9b673538a35a1ef8117fd775a23c3->enter($__internal_57ba05cc3d539bd7840793feca073b38a3c9b673538a35a1ef8117fd775a23c3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    ";
        if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 5
            echo "        <style>
            ";
            // line 6
            echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_exception_css", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
            echo "
        </style>
    ";
        }
        // line 9
        echo "    ";
        $this->displayParentBlock("head", $context, $blocks);
        echo "
";
        
        $__internal_57ba05cc3d539bd7840793feca073b38a3c9b673538a35a1ef8117fd775a23c3->leave($__internal_57ba05cc3d539bd7840793feca073b38a3c9b673538a35a1ef8117fd775a23c3_prof);

        
        $__internal_b107943dd6f5167f361694ddcffdd55ff9e6c795d62c2fa1ae6694f77ba83fb7->leave($__internal_b107943dd6f5167f361694ddcffdd55ff9e6c795d62c2fa1ae6694f77ba83fb7_prof);

    }

    // line 12
    public function block_menu($context, array $blocks = array())
    {
        $__internal_4e58be337b69286d1eca6994f768843e033ac6438f1afd05f60d3c1396723cf8 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_4e58be337b69286d1eca6994f768843e033ac6438f1afd05f60d3c1396723cf8->enter($__internal_4e58be337b69286d1eca6994f768843e033ac6438f1afd05f60d3c1396723cf8_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_726f3e3226cea86e9a4a4887009429829b4e9a406dc2dcc344d4aad0c9d92297 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_726f3e3226cea86e9a4a4887009429829b4e9a406dc2dcc344d4aad0c9d92297->enter($__internal_726f3e3226cea86e9a4a4887009429829b4e9a406dc2dcc344d4aad0c9d92297_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 13
        echo "    <span class=\"label ";
        echo (($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) ? ("label-status-error") : ("disabled"));
        echo "\">
        <span class=\"icon\">";
        // line 14
        echo twig_include($this->env, $context, "@WebProfiler/Icon/exception.svg");
        echo "</span>
        <strong>Exception</strong>
        ";
        // line 16
        if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 17
            echo "            <span class=\"count\">
                <span>1</span>
            </span>
        ";
        }
        // line 21
        echo "    </span>
";
        
        $__internal_726f3e3226cea86e9a4a4887009429829b4e9a406dc2dcc344d4aad0c9d92297->leave($__internal_726f3e3226cea86e9a4a4887009429829b4e9a406dc2dcc344d4aad0c9d92297_prof);

        
        $__internal_4e58be337b69286d1eca6994f768843e033ac6438f1afd05f60d3c1396723cf8->leave($__internal_4e58be337b69286d1eca6994f768843e033ac6438f1afd05f60d3c1396723cf8_prof);

    }

    // line 24
    public function block_panel($context, array $blocks = array())
    {
        $__internal_fe14223929043690975552b236184e065dbc1001194047839d41c99294c267f2 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_fe14223929043690975552b236184e065dbc1001194047839d41c99294c267f2->enter($__internal_fe14223929043690975552b236184e065dbc1001194047839d41c99294c267f2_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_e6e95c7797f0d98c49988114f5d5e6ac525a190edcc14cac10f548835a602d7c = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_e6e95c7797f0d98c49988114f5d5e6ac525a190edcc14cac10f548835a602d7c->enter($__internal_e6e95c7797f0d98c49988114f5d5e6ac525a190edcc14cac10f548835a602d7c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 25
        echo "    <h2>Exceptions</h2>

    ";
        // line 27
        if ( !$this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 28
            echo "        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    ";
        } else {
            // line 32
            echo "        <div class=\"sf-reset\">
            ";
            // line 33
            echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_exception", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
            echo "
        </div>
    ";
        }
        
        $__internal_e6e95c7797f0d98c49988114f5d5e6ac525a190edcc14cac10f548835a602d7c->leave($__internal_e6e95c7797f0d98c49988114f5d5e6ac525a190edcc14cac10f548835a602d7c_prof);

        
        $__internal_fe14223929043690975552b236184e065dbc1001194047839d41c99294c267f2->leave($__internal_fe14223929043690975552b236184e065dbc1001194047839d41c99294c267f2_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/exception.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 33,  135 => 32,  129 => 28,  127 => 27,  123 => 25,  114 => 24,  103 => 21,  97 => 17,  95 => 16,  90 => 14,  85 => 13,  76 => 12,  63 => 9,  57 => 6,  54 => 5,  51 => 4,  42 => 3,  11 => 1,);
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

{% block head %}
    {% if collector.hasexception %}
        <style>
            {{ render(path('_profiler_exception_css', { token: token })) }}
        </style>
    {% endif %}
    {{ parent() }}
{% endblock %}

{% block menu %}
    <span class=\"label {{ collector.hasexception ? 'label-status-error' : 'disabled' }}\">
        <span class=\"icon\">{{ include('@WebProfiler/Icon/exception.svg') }}</span>
        <strong>Exception</strong>
        {% if collector.hasexception %}
            <span class=\"count\">
                <span>1</span>
            </span>
        {% endif %}
    </span>
{% endblock %}

{% block panel %}
    <h2>Exceptions</h2>

    {% if not collector.hasexception %}
        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    {% else %}
        <div class=\"sf-reset\">
            {{ render(path('_profiler_exception', { token: token })) }}
        </div>
    {% endif %}
{% endblock %}
", "@WebProfiler/Collector/exception.html.twig", "/home/florian/Documents/5A/projet-web-5A/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/exception.html.twig");
    }
}
