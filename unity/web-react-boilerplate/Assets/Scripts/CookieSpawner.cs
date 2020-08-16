using UnityEngine;

public class CookieSpawner : MonoBehaviour
{
    [SerializeField] GameObject cookiePrefab;
    [SerializeField] float spawnHeight = 1.56f;
    [SerializeField] Vector4 spawnBounds = new Vector4(-3f, 3f, -7f, -2f);

#if UNITY_EDITOR
    void Update()
    {
        // -------------
        
        // Test cookie spawning with V key
        if (Input.GetKey(KeyCode.V))
        {
            SpawnCube(1);
        }
        
        // -------------
    }
#endif

    public void SpawnCube(int count)
    {
        // -------------
        
        for (int i = 0; i < count; i++)
        {
            // Vector3 position = new Vector3(Random.Range(minX, maxX), constY, Random.Range(minZ, maxZ));
            float randomX = Random.Range(spawnBounds.x, spawnBounds.y);
            float randomZ = Random.Range(spawnBounds.z, spawnBounds.w);
            Vector3 position = new Vector3(randomX, spawnHeight, randomZ);
            Instantiate(cookiePrefab, position, Quaternion.identity);
        }
        
        // -------------
    }
}
