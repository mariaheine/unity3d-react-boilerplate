using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PrintMousePosition : MonoBehaviour, MousePositionHandling.IMousePositionObserver
{

    public GameObject TextMousePosY;
    public GameObject TextMousePosX;

    private Text TextY, TextX;

    void Start () {

        TextY = TextMousePosY.GetComponent<Text>();
        TextX = TextMousePosX.GetComponent<Text>();

    }

    public void UpdateMousePosition(int mousePosX)
    {
        TextY.text = mousePosX.ToString();
        //TextX.text = mousePosX.ToString();
    }

    public void UpdateDoubleMousePosition(string mouseCoords)
    {
        string[] coords = mouseCoords.Split(' ');

        int[] coordsNumerical = new int[2];

        for(int i = 0; i < coords.Length; i++)
        {
            coordsNumerical[i] = Int32.Parse(coords[i]);
        }

        TextY.text = coords[0];
        TextX.text = coords[1];

    }
}
