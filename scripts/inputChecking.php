<?php

class InputChecker
{
    public static function StringIsNullOrEmpty($string)
    {
        if (is_null($string))
        {
            return true;
        }
        elseif (strcmp($string, '') == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
