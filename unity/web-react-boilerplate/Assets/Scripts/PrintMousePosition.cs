using System;
using TMPro;
using UnityEngine;

public class PrintMousePosition : MonoBehaviour
{
    [SerializeField] TextMeshProUGUI yCoordsText;
    [SerializeField] TextMeshProUGUI xCoordsText;

    // An example method to be called from the web frontend
    // Described in README 4. Two-way communication
    public void UpdateDoubleMousePosition(string mouseCoords)
    {
        // -------------
        
        string[] coords = mouseCoords.Split(' ');

        int[] coordsNumerical = new int[2];

        for (int i = 0; i < coords.Length; i++)
        {
            coordsNumerical[i] = Int32.Parse(coords[i]);
        }

        yCoordsText.text = coords[0];
        xCoordsText.text = coords[1];
        
        // -------------
    }
}
