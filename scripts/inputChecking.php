<?php
/*
Rhys Gillham

This is a script that is used to determine if strings are valid.
*/

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
