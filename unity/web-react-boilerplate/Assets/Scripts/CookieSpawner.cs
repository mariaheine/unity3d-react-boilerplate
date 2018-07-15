using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CookieSpawner : MonoBehaviour {

    float constY = 1.56f;
    float minX = -3.0f;
    float maxX = 3.0f;
    float minZ = -7.0f;
    float maxZ = -2.0f;

    public GameObject cookie;

    // Use this for initialization
    void Awake () {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.V))
            SpawnCube(1);
    }

    public void SpawnCube(int count)
    {
        for (int i = 0; i < count; i++)
        {
            Vector3 position = new Vector3(Random.Range(minX, maxX), constY, Random.Range(minZ, maxZ));
            Instantiate(cookie, position, Quaternion.identity);
        }
    }
}
