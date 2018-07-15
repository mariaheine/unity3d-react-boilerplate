using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RandomizeCubeColour : MonoBehaviour {

    public void Randomize()
    {
        GetComponent<Renderer>().material.color = Random.ColorHSV(0f, 1f, 1f, 1f, 0.5f, 1f);
    }
}
