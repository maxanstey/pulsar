<?php

namespace Jadu\Pulsar\Twig\Extension;

/**
 * Config
 *
 * Process Pulsar's config file (pulsar.json) and set
 * it's contents as globals
 *
 * Unit tests: tests/unit/ConfigExtensionTest.php
 */
class ConfigExtension extends \Twig_Extension
{

    protected $configFile;

    public function __construct($configFile)
    {
        $this->configFile = $configFile;
    }

    public function getName() 
    {
        return 'config_extension';
    }

    public function getGlobals()
    {
        return $this->getConfigVars();
    }

    public function getConfigVars()
    {
        $file = @file_get_contents($this->configFile);

        if (!$file) {
            return false;
        }
        
        $json = json_decode($file);
        $config = array();

        foreach ($json as $key => $val) {
            $config[$key] = $val;
        }

        return $config;
    }

}