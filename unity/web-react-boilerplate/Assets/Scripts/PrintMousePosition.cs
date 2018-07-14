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
}
